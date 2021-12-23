import './requirements.css';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { Table } from "react-bootstrap";

function RequirementsPage() {
  return (
    
      <Table className="Graphs" bordered hover size="sm">
      <tbody>
        <tr>
        <td>
        <h5 className="mt-2">Balanced Diet</h5>
      <Pie
        data={{
          labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
          datasets: [{
            data: [40, 25, 25, 10],
            backgroundColor: ['red', 'green', 'orange', 'blue'],
          }]
        }
        }
      >

      </Pie>
      </td>
      <td>
      <h5 className="mt-2">Vegan Diet</h5>
     <Pie
        data={{
          labels: ['Fruits & Veg', 'Carbohydrates', 'Fats'],
          datasets: [{
            data: [40, 55, 15],
            backgroundColor: ['red', 'green', 'orange'],
          }]
        }
        }
      >

      </Pie>
      </td>
      <td>
      <h5 className="mt-2">Paleo Diet</h5>
      <Pie
        data={{
          labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
          datasets: [{
            data: [40, 30, 15, 15],
            backgroundColor: ['red', 'green', 'orange', 'blue'],
          }]
        }
        }
      >

      </Pie>
      </td>
      </tr>
      <tr>
      <td>
      <h5 className="mt-2">Mediterranean  Diet</h5>
      <Pie
        data={{
          labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
          datasets: [{
            data: [30, 20, 35, 15],
            backgroundColor: ['red', 'green', 'orange', 'blue'],
          }]
        }
        }
      >

      </Pie>
      </td>
      <td>
      <h5 className="mt-2">Low-Carb Diet</h5>
      <Pie
        data={{
          labels: ['Proteins', 'Carbohydrates', 'Fats'],
          datasets: [{
            data: [50, 30, 20],
            backgroundColor: ['red', 'green', 'orange'],
          }]
        }
        }
      >

      </Pie>
      </td>
      <td>
      <h5 className="mt-2">Ketogenic Diet</h5>
      <Pie
        data={{
          labels: ['Proteins', 'Carbohydrates', 'Fats'],
          datasets: [{
            data: [20, 5, 75],
            backgroundColor: ['red', 'green', 'orange'],
          }]
        }
        }
      >
      </Pie>
      </td>
      </tr>
<tr>
<td>
      <h5 className="mt-2">The Zone Diet</h5>
      <Pie
        data={{
          labels: ['Proteins', 'Carbohydrates', 'Fats'],
          datasets: [{
            data: [30, 40, 20],
            backgroundColor: ['red', 'green', 'orange'],
          }]
        }
        }
      >

      </Pie>
      </td>
      <td>
      <h5 className="mt-2">Atkins Diet</h5>
      <Pie
        data={{
          labels: ['Proteins', 'Carbohydrates', 'Fats'],
          datasets: [{
            data: [30, 65, 5],
            backgroundColor: ['red', 'green', 'orange'],
          }]
        }
        }
      >

      </Pie>
      </td>

      <td>
      <h5 className="mt-2">Ultra-Low-Fat Diet</h5>
      <Pie
        data={{
          labels: ['Proteins', 'Carbohydrates', 'Fats'],
          datasets: [{
            data: [10, 80, 10],
            backgroundColor: ['red', 'green', 'orange'],
          }]
        }
        }
      >

      </Pie>
      </td>
</tr>
      </tbody>
      </Table>

 
  );
}

export default RequirementsPage;