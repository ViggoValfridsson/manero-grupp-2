using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Helpers.Services;
using WebAPI.Models.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Moq;
using WebAPI.Models;
using WebAPI.Models.Dtos;
using Xunit;

namespace WebAPITest;

public class ProductServiceTest
{
    private void SeedProductsMockDatabase(DataContext context)
    {
        var categories = new List<CategoryEntity>()
        {
            new CategoryEntity { Id = 1, Name = "Red Pants"}
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
            }
        };

        context.Categories.AddRange(categories);
        context.Products.AddRange(products);
        context.SaveChanges();
    }

    [Fact]
    public async Task GetAllAsync_GetsData()
    {
        var options = new DbContextOptionsBuilder<DataContext>()
          .UseInMemoryDatabase(databaseName: "InMemoryDatabase")
          .Options;

        using (var context = new DataContext(options))
        {
            SeedProductsMockDatabase(context);
        }

        using (var context = new DataContext(options))
        {
            var productService = new ProductService(context);

            // Act
            var result = await productService.GetAllAsync();

            // Assert
            Assert.Equal(2, result.Count);
        }
    }
}