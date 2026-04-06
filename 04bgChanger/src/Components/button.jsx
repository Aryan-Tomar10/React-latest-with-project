export default function Button({name='Blue', onClicks, styles={backgroundColor:"blue"}, classes='px-3 py-1 rounded-full text-white bg-blue-200 hover:bg-blue-300 duration-200' }) {
  return (
    <button className={classes} style={styles} onClick={onClicks}>{name}</button>
  )
}
