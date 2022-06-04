import Skill from './common/skill'

const Table = ({ title }) => {
  return (
    <div className='flex mb-4'>
      <div className='place-items-center'>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Table
