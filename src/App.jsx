import { motion } from "framer-motion";

function App() {


  return (
    <>
      <motion.div style={{
        color: 'yellow',
        fontSize: 20,
        width: '300px',
        height: '30px',
        textAlign: 'center',
        border: '2px solid black',
        margin: '40px'
      }}
      
      whileHover={{scale: 0.5}}
      
      >
        Nirvana
      </motion.div>
    
     
    </>
  )

  
}

  


export default App
