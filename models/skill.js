const skills = [
    {id: 1, skill: 'React', proficiency: true},
    {id: 2, skill: 'JavaScript', proficiency: false},
    {id: 3, skill: 'NodeJS', proficiency: false},
    {id: 4, skill: 'C++', proficiency: true},
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id){
    id=parseInt(id)
    return skills.find(skill=>skill.id === id)
  }

