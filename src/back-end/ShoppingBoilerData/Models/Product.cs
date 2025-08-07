namespace ShoppingBoilerData.Models;

using LiteDB;

public class Product
{
     [BsonId]
    public int Id { get; set; }
    public string Code { get; set; }
    public string Name { get; set; }
    public Price Price { get; set; }
}