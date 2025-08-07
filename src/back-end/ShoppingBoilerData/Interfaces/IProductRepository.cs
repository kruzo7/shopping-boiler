namespace ShoppingBoilerData.Interfaces;

using System.Collections.Generic;
using System.Threading.Tasks;
using ShoppingBoilerData.Models;

public interface IProductRepository
{
    Task<IEnumerable<Product>> GetAllAsync();
    Task<Product> GetByIdAsync(int id);
    Task<Product> AddAsync(Product product);
}