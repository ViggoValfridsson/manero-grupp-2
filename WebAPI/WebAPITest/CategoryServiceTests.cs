using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Helpers.Services;
using WebAPI.Models.Entities;

namespace WebAPITest;

public class CategoryServiceTests
{
    private void SeedCategoriesMockDatabase (DataContext context)
    {
        var categories = new List<CategoryEntity>()
        {
            new CategoryEntity { Id = 1, Name = "Pants"},
            new CategoryEntity { Id = 2, Name = "Shirts"},
            new CategoryEntity { Id = 3, Name = "Jackets"}
        };

        context.Categories.AddRange(categories);
        context.SaveChanges();
    }

    [Fact]
    public async Task GetAllAsync_ShouldReturnAllCategories()
    {
        var options = new DbContextOptionsBuilder<DataContext>()
       .UseInMemoryDatabase(databaseName: "InMemoryDatabase")
       .Options;

        using (var context = new DataContext(options))
        {
            SeedCategoriesMockDatabase(context);
        }

        using (var context = new DataContext(options))
        {
            var categoryService = new CategoryService(context);

            // Act
            var result = await categoryService.GetAllAsync();

            // Assert
            Assert.Equal(3, result.Count);
        }
    }
}
