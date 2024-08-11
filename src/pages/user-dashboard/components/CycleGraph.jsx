import React from "react";
import ReactApexChart from "react-apexcharts";

class CycleGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Cycle Length",
          data: [28, 30, 29, 31, 28, 27, 30, 29, 31, 27, 53, 18], // Sample data for cycle length
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Cycle Trends",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        annotations: {
          points: [
            {
              x: "Apr",
              y: 31,
              marker: {
                size: 8,
                fillColor: "#fff",
                strokeColor: "#ff4560",
                radius: 2,
              },
              label: {
                borderColor: "#ff4560",
                offsetY: 0,
                style: {
                  color: "#fff",
                  background: "#ff4560",
                },
                text: "ABNORMAL",
              },
            },
            {
              x: "Jul",
              y: 27,
              marker: {
                size: 8,
                fillColor: "#fff",
                strokeColor: "#ff4560",
                radius: 2,
              },
              label: {
                borderColor: "#ff4560",
                offsetY: 0,
                style: {
                  color: "#fff",
                  background: "#ff4560",
                },
                text: "ABNORMAL",
              },
            },
          ],
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart" className="">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={400}
            width={700}
          />
          <div id="html-dist"></div>
        </div>
      </div>
    );
  }
}

export default CycleGraph;
