// add css link 

const ProjectCont = ({ project }) => (

  <div className="card" style={{width: '18 rem'}}>
    <img className="card-img-top" src={project.img} alt="Card image cap"/>
    <div className="card-body">
      <h4 className="card-title">{project.name}</h4>
      <p className="card-text">{project.description}</p>
      <a href={project.repo} className="btn btn-secondary">Github</a>
      <a href={project.liveLink} className="btn btn-secondary">Live</a>
    </div>
  </div>

)

export default ProjectCont