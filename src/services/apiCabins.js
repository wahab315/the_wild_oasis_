import supabase from "./supabase";


// For Getting Data
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

// For Creating new cabin
export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert(newCabin)
    .select();

  if (error) {
    throw new Error("Cabins could not be created");
  }
  return data;
}

//  for deleting cabin 
export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
