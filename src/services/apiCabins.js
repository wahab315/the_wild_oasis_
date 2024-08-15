import supabase from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log("Error in get cabins", error);
    throw new Error("Cabins could not be loaded");
  }

  return cabins;
}
