using System.Linq.Expressions;

namespace WebAPI.Helpers;

public class CombineHelper
{
    public Expression<Func<T, bool>> CombineFilters<T>(Expression<Func<T, bool>> filter1, Expression<Func<T, bool>> filter2)
    {
        return Expression.Lambda<Func<T, bool>>(
            Expression.AndAlso(filter1.Body, filter2.Body), filter1.Parameters);
    }

    //public Expression<Func<T, bool>> CombineFilters<T>(Expression<Func<T, bool>> filter1, Expression<Func<T, bool>> filter2)
    //{
    //    // Create a new parameter expression to ensure consistency in parameter references
    //    var parameter = Expression.Parameter(typeof(T));

    //    // Replace the parameters in filter1 and filter2 with the new parameter
    //    var filter1Body = new ParameterReplacer(parameter).Visit(filter1.Body);
    //    var filter2Body = new ParameterReplacer(parameter).Visit(filter2.Body);

    //    // Combine the filtered bodies with AndAlso
    //    var combinedBody = Expression.AndAlso(filter1Body, filter2Body);

    //    // Create the final lambda expression
    //    var lambda = Expression.Lambda<Func<T, bool>>(combinedBody, parameter);

    //    return lambda;
    //}

    //// Helper class to replace parameter expressions in an expression tree
    //private class ParameterReplacer : ExpressionVisitor
    //{
    //    private readonly ParameterExpression _parameter;

    //    public ParameterReplacer(ParameterExpression parameter)
    //    {
    //        _parameter = parameter;
    //    }

    //    protected override Expression VisitParameter(ParameterExpression node)
    //    {
    //        // Replace the parameter with the new parameter
    //        return _parameter;
    //    }
    //}

}
