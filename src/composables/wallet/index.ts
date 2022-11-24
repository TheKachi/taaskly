
export const useWallet = () => {
    const loading = ref(false)
  const error = ref(null)

    const fundWallet = async (amount: number) => {

    }
    return { loading, fundWallet }
}
