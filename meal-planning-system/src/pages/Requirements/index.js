import './requirements.css';
import 'chart.js/auto';
import {Bar, Pie, Doughnut} from 'react-chartjs-2';


function RequirementsPage() {
  return (
    <div className="Graphs">
      <h5 className="mb-4">Balanced Diet</h5>
      <Pie
      data={{
        labels:['Fruits & Veg','Proteins','Carbohydrates','Fats'],
        datasets:[{
          data:[40,25,25,10],
          backgroundColor:['red','green','orange','blue'],
        }]
      }
      }
      >

      </Pie>
<hr></hr>
      <h5 className="mt-4 mb-4">Vegan Diet</h5>
      <Pie
      data={{
        labels:['Fruits & Veg','Carbohydrates','Fats'],
        datasets:[{
          data:[40, 55, 15],
          backgroundColor:['red','green','orange'],
        }]
      }
      }
      >

      </Pie>

      <hr></hr>
      <h5 className="mt-4 mb-4">Paleo Diet</h5>
      <Pie
      data={{
        labels:['Fruits & Veg','Proteins','Carbohydrates','Fats'],
        datasets:[{
          data:[40,30,15,15],
          backgroundColor:['red','green','orange','blue'],
        }]
      }
      }
      >

      </Pie>

      <hr></hr>
      <h5 className="mt-4 mb-4">Mediterranean Diet</h5>
      <Pie
      data={{
        labels:['Fruits & Veg','Proteins','Carbohydrates','Fats'],
        datasets:[{
          data:[30,20,35,15],
          backgroundColor:['red','green','orange','blue'],
        }]
      }
      }
      >

      </Pie>

      <hr></hr>
      <h5 className="mt-4 mb-4">Low Carbohydrates Diet</h5>
      <Pie
      data={{
        labels:['Proteins','Carbohydrates','Fats'],
        datasets:[{
          data:[50, 30, 20],
          backgroundColor:['red','green','orange'],
        }]
      }
      }
      >

      </Pie>

    </div>
  );
}

export default RequirementsPage;