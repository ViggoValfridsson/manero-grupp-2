using WebAPI.Helpers.Repositories;
using WebAPI.Helpers.Services;

namespace WebAPITest;

[Collection("Database collection")]
public class ProductServiceTests
{
    private readonly DatabaseFixture _fixture;

    public ProductServiceTests(DatabaseFixture fixture)
    {
        _fixture = fixture;
    }

    [Fact]
    public async Task GetAllAsync_ShouldReturnAllProducts()
    {
        var context = _fixture.CreateContext(); // Access the context from the fixture
        var productRepo = new ProductRepo(context);
        var productService = new ProductService(productRepo);

        // Act
        var result = await productService.GetAllAsync();

        // Assert
        Assert.Equal(4, result.Count);
    }
}