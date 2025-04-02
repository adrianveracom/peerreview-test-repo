import React from 'react';

// This function could be refactored to:
// 1. Use TypeScript interfaces for better type safety
// 2. Separate the calculations into smaller, reusable functions
// 3. Use more efficient data structures
// 4. Add error handling
// 5. Use constants for magic numbers
function calculateEmployeeStats(employees: any[]) {
  let totalSalary = 0;
  let departmentCounts: { [key: string]: number } = {};
  let experienceLevels: { [key: string]: number } = {};
  
  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    totalSalary += emp.salary;
    
    if (!departmentCounts[emp.department]) {
      departmentCounts[emp.department] = 0;
    }
    departmentCounts[emp.department]++;
    
    if (emp.yearsOfExperience < 2) {
      if (!experienceLevels['Junior']) experienceLevels['Junior'] = 0;
      experienceLevels['Junior']++;
    } else if (emp.yearsOfExperience < 5) {
      if (!experienceLevels['Mid']) experienceLevels['Mid'] = 0;
      experienceLevels['Mid']++;
    } else {
      if (!experienceLevels['Senior']) experienceLevels['Senior'] = 0;
      experienceLevels['Senior']++;
    }
  }
  
  return {
    averageSalary: totalSalary / employees.length,
    departmentBreakdown: departmentCounts,
    experienceBreakdown: experienceLevels
  };
}

export default function AboutPage() {
  // Example data that would be better handled with proper state management
  const employees = [
    { name: 'John', salary: 50000, department: 'Engineering', yearsOfExperience: 1 },
    { name: 'Jane', salary: 75000, department: 'Engineering', yearsOfExperience: 3 },
    { name: 'Bob', salary: 100000, department: 'Design', yearsOfExperience: 6 },
    { name: 'Alice', salary: 65000, department: 'Marketing', yearsOfExperience: 2 }
  ];

  const stats = calculateEmployeeStats(employees);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="max-w-2xl">
        <p className="text-lg mb-4">
          Welcome to our website! We are passionate about creating amazing experiences
          and delivering value to our users.
        </p>
        <p className="text-lg mb-4">
          Our mission is to make the world a better place through technology and innovation.
          We believe in continuous learning and improvement.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Innovation and Creativity</li>
            <li>User-Centric Design</li>
            <li>Quality and Excellence</li>
            <li>Continuous Learning</li>
          </ul>
        </div>

        {/* Displaying stats that could be moved to a separate component */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Company Statistics</h2>
          <p>Average Salary: ${stats.averageSalary.toFixed(2)}</p>
          <div className="mt-2">
            <h3 className="font-semibold">Department Breakdown:</h3>
            {Object.entries(stats.departmentBreakdown).map(([dept, count]) => (
              <p key={dept}>{dept}: {count} employees</p>
            ))}
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Experience Levels:</h3>
            {Object.entries(stats.experienceBreakdown).map(([level, count]) => (
              <p key={level}>{level}: {count} employees</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 