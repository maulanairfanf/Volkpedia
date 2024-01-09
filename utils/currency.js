export const rupiah = (number)=>{
  if (number) {
    const result = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
    return result.replace("Rp", '').split(',')[0]
  } else {
    return 0
  }
}