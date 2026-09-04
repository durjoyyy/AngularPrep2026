import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.scss',
})
export class IfElse {
  isLoggedIn=false;

  showBox=true;

  toggleBox(){
    this.showBox=!this.showBox;
  }

  status:string='shipped';

  company:string='Benz';

  removeItem(id:number){
    this.doctors.splice(id,1);
  }







  skills=['Angular','React','Springboot','Javascript'];
  players=[
  {
    "id": 1,
    "player": "Lionel Messi",
    "club": "Inter Miami"
  },
  {
    "id": 2,
    "player": "Kylian Mbappé",
    "club": "Real Madrid"
  },
  {
    "id": 3,
    "player": "Erling Haaland",
    "club": "Manchester City"
  },
  {
    "id": 4,
    "player": "Lamine Yamal",
    "club": "Barcelona"
  },
  {
    "id": 5,
    "player": "Jude Bellingham",
    "club": "Real Madrid"
  }
]


doctors=[
  {
    "id": 1,
    "name": "Dr. Priya Sharma",
    "specialization": "Dermatologist"
  },
  {
    "id": 2,
    "name": "Dr. Arjun Mehta",
    "specialization": "Cardiologist"
  },
  {
    "id": 3,
    "name": "Dr. Neha Verma",
    "specialization": "Pediatrician"
  },
  {
    "id": 4,
    "name": "Dr. Rahul Kapoor",
    "specialization": "Orthopedic Surgeon"
  },
  {
    "id": 5,
    "name": "Dr. Ananya Iyer",
    "specialization": "Neurologist"
  }
]

sexPositions=[
  {
    "id": 1,
    "name": "Missionary",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "name": "Cowgirl",
    "difficulty": "Medium"
  },
  {
    "id": 3,
    "name": "Reverse Cowgirl",
    "difficulty": "Medium"
  },
  {
    "id": 4,
    "name": "Spooning",
    "difficulty": "Easy"
  },
  {
    "id": 5,
    "name": "Standing",
    "difficulty": "Hard"
  }
]







}
