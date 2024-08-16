import { printTeacher } from './main';  // Adjust the path as necessary to where your function is defined

describe('printTeacher function tests', () => {
  it('should return the first letter of the first name followed by a period and the full last name', () => {
    // Test case with normal inputs
    const result = printTeacher("John", "Doe");
    expect(result).toBe("J.Doe");

    // Additional test cases to ensure robustness
    const result2 = printTeacher("Alice", "Smith");
    expect(result2).toBe("A.Smith");
  });

  it('should handle empty inputs correctly', () => {
    // Test case for empty first name
    const result = printTeacher("", "Doe");
    expect(result).toBe(".Doe");  // Decide how you want to handle this case specifically

    // Test case for empty last name
    const result2 = printTeacher("John", "");
    expect(result2).toBe("J.");  // Similarly, define expected behavior
  });

  it('should handle single-character names correctly', () => {
    // Ensuring that single-character names are handled without errors
    const result = printTeacher("J", "Doe");
    expect(result).toBe("J.Doe");

    const result2 = printTeacher("John", "D");
    expect(result2).toBe("J.D");
  });
});

