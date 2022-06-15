(function populate() {
  const ctx = document.getElementById("myChart");
  fetch("./data.json")
  .then((weeklySpending) => {
      return weeklySpending.json();
    })
    .then((weeklySpending) => {
        // Chart.defaults.global.defaultFontFamily = "Roboto",
        const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          datasets: [{
              data: [...weeklySpending],
            },
          ],
        },
        options: {
            resposive: true,
          parsing: {
            xAxisKey: "day",
            yAxisKey: "amount",
          },
          scales: {
            x: {
              grid: { display: false, borderColor: "hsl(33, 100%, 98%)" },
            },
            y: {
              grid: { display: false, borderColor: "hsl(33, 100%, 98%)" },
              ticks: { display: false },
            },
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                font: {
                  size: 123,
                  family: "'DM Sans', sans-serif",
                },
              },
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                callbacks: {
                    title: function (context) {
                        context = '$' + context[0].formattedValue;
                        return context
                    },
                    label: function (context) {
                        context = '';
                        return context
                    }
                },
                backgroundColor: 'pink',
                titleColor: 'red',
                titleMarginBottom: 0,
                padding: 8,
                caretSize: 0
            }
          },
          elements: {
            bar: {
              backgroundColor: "hsl(10, 79%, 65%)",
              borderRadius: 3,
            },
          },
        },
      });
    });
})();
