// Implementation A: Using a formula
/**
 * Mathematical Approach
 * Complexity:
 *   • Time Complexity: O(1), as it uses a direct mathematical formula.
 *   • Space Complexity: O(1), as it only uses a constant amount of space.
 *
 * Efficiency:
 * This approach is extremely efficient as it calculates the result in constant time,
 * regardless of the size of n. It is ideal for scenarios where performance is critical,
 * such as when dealing with very large n or when the function needs to be called frequently.
 */
function sum_to_n_a(n: number): number {
    return (n * (n + 1)) / 2;
}

// Implementation B: Using a loop
/**
 * Iterative Approach
 * Complexity:
 *   • Time Complexity: O(n), as it iterates from 1 to n.
 *   • Space Complexity: O(1), as it uses a single variable to store the sum.
 *
 * Efficiency:
 * This approach is straightforward and intuitive, making it easy to understand and implement.
 * However, it becomes less efficient for large values of n, as the loop needs to iterate n times.
 * It is suitable for smaller values of n or when computational resources are not constrained.
 */
function sum_to_n_b(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Implementation C: Using recursion
/**
 * Recursive Approach
 * Complexity:
 *   • Time Complexity: O(n), as it makes n recursive calls.
 *   • Space Complexity: O(n), as it uses the call stack for each recursion.
 *
 * Efficiency:
 * This approach is conceptually elegant and showcases the recursive structure of the problem.
 * However, it is less practical for large n because it can lead to stack overflow errors
 * due to the call stack size limit. Additionally, the overhead of recursive calls makes it
 * less efficient than the iterative or mathematical approach.
 * Suitable mainly for small values of n or for demonstrating recursive concepts.
 */
function sum_to_n_c(n: number): number {
    if (n <= 1) return n;
    return n + sum_to_n_c(n - 1);
}