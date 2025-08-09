namespace  ShoppingBoilerAPI.Controllers;

using Microsoft.AspNetCore.Mvc;
using ShoppingBoilerData.Interfaces;
using ShoppingBoilerData.Models;

[ApiController]
[Route("api/v1/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _repo;
    public ProductsController(IProductRepository repo) => _repo = repo;

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _repo.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var product = await _repo.GetByIdAsync(id);
        if (product == null) return NotFound();
        return Ok(product);
    }

    [HttpPost]
    public async Task<IActionResult> Add(Product product)
    {
        var created = await _repo.AddAsync(product);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }
}