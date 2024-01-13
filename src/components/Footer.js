
const Footer = ({Items}) => {
  const len=Items.length
  return ( 
<footer className='footer'>

    <p>
      {` You Have  ${Items.length>1?len +' pending tasks':len + ' pending task'} .`} 
    </p>

  </footer>  )                                             }

export default Footer