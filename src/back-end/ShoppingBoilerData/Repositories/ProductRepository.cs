namespace ShoppingBoilerData.Repositories;

using LiteDB;
using ShoppingBoilerData.DBContext;
using ShoppingBoilerData.Interfaces;
using ShoppingBoilerData.Models;

public class ProductRepository : IProductRepository
{
    private readonly ILiteCollection<Product> _collection;
    public ProductRepository(LiteDbContext context)
    {
        _collection = context.Products;
    }

    public Task<IEnumerable<Product>> GetAllAsync()
        => Task.FromResult(_collection.FindAll());

    public Task<Product> GetByIdAsync(int id)
        => Task.FromResult(_collection.FindById(id));

    public Task<Product> AddAsync(Product product)
    {
        var id = _collection.Insert(product);
        product.Id = id.AsInt32;
        return Task.FromResult(product);
    }
}