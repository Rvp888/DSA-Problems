
// Migratory Birds:

// Problem:
// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently 
// sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example:
// arr = [1,1,2,2,3]
// There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

// Note: It is guaranteed that each type is 1,2,3,4 or 5.

// Ex:
// Input: arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
// Output: 3.

// Explaination:
// The different types of birds occur in the following frequencies:

// Type 1: 2
// Type 2: 2
// Type 3: 3
// Type 4: 3
// Type 5: 1

// Both Type 3 and Type 4 have a frequency of 3, and the lower of those is Type 3.