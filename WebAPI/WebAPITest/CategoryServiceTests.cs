using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Helpers.Repositories;
using WebAPI.Helpers.Services;

namespace WebAPITest;

[Collection("Database collection")]
public class CategoryServiceTests
{
    private readonly DatabaseFixture _fixture;

    public CategoryServiceTests(DatabaseFixture fixture)
    {
        _fixture = fixture;
    }

    [Fact]
    public async Task GetAllAsync_ShouldReturnAllCategories()
    {
        var context = _fixture.CreateContext(); // Access the context from the fixture
        var categoryRepo = new CategoryRepo(context);
        var categoryService = new CategoryService(categoryRepo);

        // Act
        var result = await categoryService.GetAllAsync();

        // Assert
        Assert.Equal(3, result.Count);
    }
}
