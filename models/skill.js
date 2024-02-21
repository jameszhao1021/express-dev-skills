const skills = [
    {id: 1, skill: 'React', proficiency: true},
    {id: 2, skill: 'JavaScript', proficiency: false},
    {id: 3, skill: 'NodeJS', proficiency: false},
    {id: 4, skill: 'C++', proficiency: true},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id){
    id=parseInt(id)
    return skills.find(skill=>skill.id === id)
  }

function create(skill){
  skill.id = Date.now() % 1000000;
  skill.proficiency = true;
  skills.push(skill);
}

function deleteOne(id){
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}