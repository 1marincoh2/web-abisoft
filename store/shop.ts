export const state = () => ({
  list: [],
})


export const mutations = {
  addProd(state: any, producto: any) {
    state.list.push({ ...producto })
  },
  addQuantity(state: any, producto: any) {
    console.log("hee")
    const findProd = state.list.findIndex((item: any) => item.id === producto.id);
    if (findProd > -1) {
      const prod = state.list[findProd]
      prod.quantity = prod.quantity + 1
      state.list.splice(findProd, 1, prod)

    }

  },
  subQuantity(state: any, producto: any) {
    const findProd = state.list.findIndex((item: any) => item.id === producto.id);
    if (findProd > -1) {
      const prod = state.list[findProd]
      if (prod.quantity !== 1) {
        prod.quantity = prod.quantity - 1
        state.list.splice(findProd, 1, prod)
      }
    }
    
  },
}