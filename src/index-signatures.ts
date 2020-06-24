export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "Nari", underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = "Nari";
profile.age = 32;
profile.nationality = "Japan";
