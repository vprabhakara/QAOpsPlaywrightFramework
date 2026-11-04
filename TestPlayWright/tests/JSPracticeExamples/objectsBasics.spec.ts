let person =
{
    firstName :'Vani',
    lastName :'Sunil',
    gender :'Female',
    fullName : function()
    {
       console.log( this.firstName+ " "+this.lastName)
    }
}

console.log(person.fullName())

for(let property in person)
{
    console.log(person[property])
}