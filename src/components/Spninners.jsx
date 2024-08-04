import { ClipLoader } from "react-spinners"

const Override ={
    display: 'block',
    margin: '100px auto'

}
const Spninners = ({ loading }) => {

  return (
    <div>
      <ClipLoader color ='#bc014ff3' loading={loading} cssOverride={Override} size={150}/>
    </div>
  )
}

export default Spninners
