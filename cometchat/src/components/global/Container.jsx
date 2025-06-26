const Container = ({children, bg, pt, pb}) => {
  return (
    <div style={{paddingBottom:pb, paddingTop:pt, backgroundColor:bg}} className={`lg:px-16 md:px-16 p-4`}>{children}</div>
  )
}

export default Container