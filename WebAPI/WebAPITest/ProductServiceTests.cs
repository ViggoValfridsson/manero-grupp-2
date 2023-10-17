using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Helpers.Repositories;
using WebAPI.Helpers.Services;
using WebAPI.Models.Entities;

namespace WebAPITest;

public class DatabaseFixture : IDisposable
{
    private DataContext _context;

    public DatabaseFixture()
    {
        var options = new DbContextOptionsBuilder<DataContext>()
            .UseInMemoryDatabase(databaseName: "InMemoryProductDatabase")
            .Options;

        _context = new DataContext(options);

        SeedProductsMockDatabase(_context);
    }

    public DataContext CreateContext()
    {
        return _context;
    }

    public void Dispose()
    {
        _context.Dispose();
    }

    private void SeedProductsMockDatabase(DataContext context)
    {
        var categories = new List<CategoryEntity>()
        {
            new CategoryEntity { Id = 1, Name = "Pants"},
            new CategoryEntity { Id = 2, Name = "Shirts"},
            new CategoryEntity { Id = 3, Name = "Shoes"}
        };

        var products = new List<ProductEntity>()
        {
            new ProductEntity
            {
                Id = 1,
                Name = "Red Pants",
                Description = "A pair of red pants.",
                CategoryId = 1,
                Price = 59.99m
            },
            new ProductEntity
            {
                Id = 2,
                Name = "Blue Pants",
                Description = "A pair of blue pants.",
                CategoryId = 1,
                Price = 59.99m
            },
            new ProductEntity
            {
                Id = 3,
                Name = "Blue shirt",
                Description = "A blue shirt.",
                CategoryId = 2,
                Price = 59.99m
            },
            new ProductEntity
            {
                Id = 4,
                Name = "Red Shirt",
                Description = "A red shirt.",
                CategoryId = 1,
                Price = 59.99m
            }
        };

        context.Categories.AddRange(categories);
        context.Products.AddRange(products);
        context.SaveChanges();
    }
}

public class ProductServiceTests : IClassFixture<DatabaseFixture>
{
    private readonly DatabaseFixture _fixture;

    public ProductServiceTests(DatabaseFixture fixture)
    {
        _fixture = fixture;
    }

    [Fact]
    public async Task GetAllAsync_ShouldReturnAllProducts()
    {
        using (var context = _fixture.CreateContext())
        {
            var productRepo = new ProductRepo(context);
            var productService = new ProductService(productRepo);

            // Act
            var result = await productService.GetAllAsync();

            // Assert
            Assert.Equal(4, result.Count);
        }
    }
}