namespace ShoppingBoilerData.Startup;

using ShoppingBoilerData.DBContext;
using ShoppingBoilerData.Models;

public static class InitDB
{
    public static LiteDbContext InitContext()
    {
        var liteDbContext = new LiteDbContext();

        AddTestData(liteDbContext);

        return liteDbContext;
    }

    private static void AddTestData(LiteDbContext liteDbContext)
    {
        var productsCollection = liteDbContext.Products;
        if (productsCollection.Count() == 0)
        {
            for (int i = 1; i <= 15; i++)
            {
                productsCollection.Insert(new Product
                {
                    Code = $"P{i:000}",
                    Name = $"Product {i}",
                    Price = new Price { Value = 10 * i, Currency = "USD" }
                });
            }
        }
    }
}