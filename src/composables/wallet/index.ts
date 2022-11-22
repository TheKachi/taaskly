
export const useWallet = () => {
    const loading = ref(false)
  const error = ref(null)

    const fundWallet = async (amount: number) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
          SeerbitPay({
        // replace with your public key
        public_key: import.meta.env.VITE_PUBLIC_KEY,
        tranref: new Date().getTime(),
        currency: 'NGN',
        country: 'NG',
        amount: '150.00',
        email: 'test@emaildomain.com',
        // optional field. Set to true to allow customer set the amount
        setAmountByCustomer: false,
        full_name: 'John Doe' // optional
        // callbackurl: 'http://yourdomain.com'
        },
        function callback(response:any, closeModal:any) {
          // console.log(response)
          // response of transaction
        },
        function close(close:any) {
          // console.log(close)
         // transaction close
        })
    }
    return { loading, fundWallet }
}
