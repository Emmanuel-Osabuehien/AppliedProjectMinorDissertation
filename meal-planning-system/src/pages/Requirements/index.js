import './requirements.css';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { Table } from "react-bootstrap";

function RequirementsPage() {
  return (

    <Table className="Graphs" bordered hover size="sm">
     <caption className="Captions">Choose Diet From List</caption>
      <tbody className="Borders">
        <tr>
          <td>
            <a href="https://www.healthline.com/health/balanced-diet" className="GFG"><h5 className="mt-2">Balanced Diet</h5></a>
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
            <a href="https://www.healthline.com/nutrition/vegan-diet-guide" className="GFG"><h5 className="mt-2">Vegan Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [40, 25, 25, 10],
                  backgroundColor: ['aqua', 'beige', 'blueviolet', 'darkgreen'],
                }]
              }
              }
            >

            </Pie>
          </td>
          <td>
            <a href="https://www.healthline.com/nutrition/paleo-diet-meal-plan-and-menu" className="GFG"><h5 className="mt-2">Paleo Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [40, 30, 15, 15],
                  backgroundColor: ['darkorange', 'darkkhaki', 'cyan', 'mistyrose'],
                }]
              }
              }
            >

            </Pie>
          </td>

          <td>
            <a href="https://www.healthline.com/nutrition/south-beach-diet" className="GFG"><h5 className="mt-2">South Beach Diet</h5></a>
            <Pie
              data={{
                labels: ['Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [20, 10, 70],
                  backgroundColor: ['springgreen', 'silver', 'slateblue'],
                }]
              }
              }
            >

            </Pie>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.healthline.com/nutrition/mediterranean-diet-meal-plan" className="GFG"><h5 className="mt-2">Mediterranean  Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [30, 20, 35, 15],
                  backgroundColor: ['mocassin', 'lightcyan', 'midnightblue', 'sienna'],
                }]
              }
              }
            >

            </Pie>
          </td>
          <td>
            <a href="https://www.healthline.com/nutrition/low-carb-diet-meal-plan-and-menu" className="GFG"><h5 className="mt-2">Low-Carb Diet</h5></a>
            <Pie
              data={{
                labels: ['Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [50, 30, 20],
                  backgroundColor: ['skyblue', 'seagreen', 'lightsalmon'],
                }]
              }
              }
            >

            </Pie>
          </td>
          <td>
            <a href="https://www.healthline.com/nutrition/ketogenic-diet-101" className="GFG"><h5 className="mt-2">Ketogenic Diet</h5></a>
            <Pie
              data={{
                labels: ['Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [20, 5, 75],
                  backgroundColor: ['olive', 'lightgreen', 'peachpuff'],
                }]
              }
              }
            >
            </Pie>
          </td>

          <td>
            <a href="https://www.healthline.com/nutrition/raw-food-diet" className="GFG"><h5 className="mt-2">Raw Food Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [55, 5, 20, 20],
                  backgroundColor: ['steelblue', 'rebeccapurple', 'papayawhip', 'peru'],
                }]
              }
              }
            >

            </Pie>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.healthline.com/nutrition/zone-diet" className="GFG"><h5 className="mt-2">The Zone Diet</h5></a>
            <Pie
              data={{
                labels: ['Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [30, 40, 20],
                  backgroundColor: ['orangered', 'palegreen', 'oldlace'],
                }]
              }
              }
            >

            </Pie>
          </td>
          <td>
            <a href="https://www.healthline.com/nutrition/atkins-diet-101" className="GFG"><h5 className="mt-2">Atkins Diet</h5></a>
            <Pie
              data={{
                labels: ['Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [30, 65, 5],
                  backgroundColor: ['orchid', 'paleturquoise', 'palevioletred'],
                }]
              }
              }
            >

            </Pie>
          </td>

          <td>
            <a href="https://www.healthline.com/nutrition/is-ultra-low-fat-healthy" className="GFG"><h5 className="mt-2">Ultra-Low-Fat Diet</h5></a>
            <Pie
              data={{
                labels: ['Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [10, 80, 10],
                  backgroundColor: ['purple', 'yellow', 'lightseagreen'],
                }]
              }
              }
            >

            </Pie>
          </td>

          <td>
            <a href="https://www.healthline.com/nutrition/ornish-diet-review" className="GFG"><h5 className="mt-2">Ornish Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [40, 10, 40, 10],
                  backgroundColor: ['gainsboro', 'indianred', 'darkviolet', 'dodgerblue'],
                }]
              }
              }
            >

            </Pie>
          </td>
        </tr>

        <tr>
          <td>
            <a href="https://www.healthline.com/nutrition/vegetarian-diet-plan" className="GFG"><h5 className="mt-2">Vegetarian Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [40, 25, 25, 10],
                  backgroundColor: ['maroon', 'magenta', 'linen', 'dimgrey'],
                }]
              }
              }
            >

            </Pie>
          </td>
          <td>
            <a href="https://www.healthline.com/nutrition/best-diet-for-gout" className="GFG"><h5 className="mt-2">Gout Diet</h5></a>
            <Pie
              data={{
                labels: ['Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [30, 65, 5],
                  backgroundColor: ['deeppink', 'darkgoldenrod', 'cornflowerblue'],
                }]
              }
              }
            >

            </Pie>
          </td>

          <td>
            <a href="https://www.healthline.com/nutrition/the-military-diet-101" className="GFG"><h5 className="mt-2">Military Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [25, 35, 25, 15],
                  backgroundColor: ['crimson', 'navy', 'cornsilk', 'tan'],
                }]
              }
              }
            >

            </Pie>
          </td>

          <td>
            <a href="https://www.healthline.com/nutrition/mind-diet" className="GFG"><h5 className="mt-2">Mind Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [10, 25, 35, 30],
                  backgroundColor: ['mediumpurple', 'mediumaquamarine', 'lime', 'ivory'],
                }]
              }
              }
            >

            </Pie>
          </td>
        </tr>

        <tr>

          <td>
            <a href="https://www.healthline.com/health/pregnancy/diet-nutrition" className="GFG"><h5 className="mt-2">Fertility Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [20, 20, 50, 10],
                  backgroundColor: ['mediumslateblue', 'lightgoldenrodyellow', 'khaki', 'fuchsia'],
                }]
              }
              }
            >

            </Pie>
          </td>
          <td>
            <a href="https://www.healthline.com/nutrition/tlc-diet#benefits" className="GFG"><h5 className="mt-2">TLC Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [10, 20, 50, 20],
                  backgroundColor: ['blanchedalmond', 'rosybrown', 'firebrick', 'olivedrab'],
                }]
              }
              }
            >

            </Pie>
          </td>

          <td>
            <a href="https://www.healthline.com/nutrition/flexitarian-diet-guide" className="GFG"><h5 className="mt-2">Flexitarian Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [5, 15, 55, 25],
                  backgroundColor: ['darksalmon', 'darkmagenta', 'lemonchiffon', 'mediumorchid'],
                }]
              }
              }
            >

            </Pie>
          </td>

          <td>
            <a href="https://www.healthline.com/health/food-nutrition/macrobioticdiet#who-should-try-this" className="GFG"><h5 className="mt-2">Macrobiotic Diet</h5></a>
            <Pie
              data={{
                labels: ['Fruits & Veg', 'Proteins', 'Carbohydrates', 'Fats'],
                datasets: [{
                  data: [5, 15, 65, 15],
                  backgroundColor: ['burlywood', 'red', 'bisque', 'cadetblue'],
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