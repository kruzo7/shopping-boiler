namespace ShoppingBoilerData.DBContext;

using LiteDB;
using ShoppingBoilerData.Models;

public class LiteDbContext
{
    public LiteDatabase Database { get; }

    public LiteDbContext()
    {
        Database = new LiteDatabase("Filename=:memory:");
    }

    public ILiteCollection<Product> Products => Database.GetCollection<Product>("products");
}