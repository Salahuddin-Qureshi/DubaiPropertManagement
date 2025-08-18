<div class="row mb-4 g-4">
    <div class="col-md-3">
        <div class="card text-white mb-3" style="background: linear-gradient(135deg, #009688 0%, #26a69a 100%);">
            <div class="card-body d-flex align-items-center gap-3">
                <i class="bi bi-house-door-fill display-6"></i>
                <div>
                    <h6 class="card-title mb-1">Total Properties</h6>
                    <div class="display-6">156</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card text-white mb-3" style="background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);">
            <div class="card-body d-flex align-items-center gap-3">
                <i class="bi bi-people-fill display-6"></i>
                <div>
                    <h6 class="card-title mb-1">Occupancy Rate</h6>
                    <div class="display-6">91%</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card text-white mb-3" style="background: linear-gradient(135deg, #36d1c4 0%, #007991 100%);">
            <div class="card-body d-flex align-items-center gap-3">
                <i class="bi bi-cash-coin display-6"></i>
                <div>
                    <h6 class="card-title mb-1">Monthly Rent</h6>
                    <div class="display-6">AED 67,000</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card text-white mb-3" style="background: linear-gradient(135deg, #ff5858 0%, #f09819 100%);">
            <div class="card-body d-flex align-items-center gap-3">
                <i class="bi bi-exclamation-triangle-fill display-6"></i>
                <div>
                    <h6 class="card-title mb-1">Overdue Payments</h6>
                    <div class="display-6">AED 12,500</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row g-4 mb-4">
    <div class="col-md-6">
        <div class="card mb-4 animate__animated animate__fadeIn">
            <div class="card-header">Income Chart</div>
            <div class="card-body">
                <canvas id="incomeChart" height="200"></canvas>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card mb-4 animate__animated animate__fadeIn">
            <div class="card-header">Occupancy Chart</div>
            <div class="card-body">
                <canvas id="occupancyChart" height="200"></canvas>
            </div>
        </div>
    </div>
</div>
<div class="card animate__animated animate__fadeInUp">
    <div class="card-header">Upcoming Contract Expiries</div>
    <div class="card-body p-0">
        <table class="table mb-0 align-middle">
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Tenant</th>
                    <th>Days Left</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Tower A - Unit 101</td><td>Ahmed Al Mansouri</td><td>25</td><td><span class="badge bg-warning text-dark">30 days</span></td></tr>
                <tr><td>Tower B - Unit 205</td><td>Sarah Johnson</td><td>45</td><td><span class="badge bg-info text-dark">60 days</span></td></tr>
                <tr><td>Tower C - Unit 312</td><td>Mohammed Ali</td><td>78</td><td><span class="badge bg-secondary">90 days</span></td></tr>
                <tr><td>Tower A - Unit 203</td><td>Fatima Hassan</td><td>15</td><td><span class="badge bg-warning text-dark">30 days</span></td></tr>
            </tbody>
        </table>
    </div>
</div>
<script>
// Income Chart Data
const incomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Income (AED)',
        data: [45000, 52000, 48000, 61000, 55000, 67000],
        fill: true,
        backgroundColor: ctx => {
            const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, 'rgba(0,150,136,0.3)');
            gradient.addColorStop(1, 'rgba(0,150,136,0.05)');
            return gradient;
        },
        borderColor: '#009688',
        tension: 0.4,
        pointBackgroundColor: '#009688',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
    }]
};
// Occupancy Chart Data
const occupancyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Occupancy (%)',
        data: [85, 88, 92, 89, 95, 91],
        backgroundColor: [
            '#43cea2', '#43cea2', '#43cea2', '#43cea2', '#43cea2', '#43cea2'
        ],
        borderRadius: 8,
        barPercentage: 0.7,
        categoryPercentage: 0.6
    }]
};
window.addEventListener('DOMContentLoaded', function() {
    // Income Line Chart
    const incomeCtx = document.getElementById('incomeChart').getContext('2d');
    new Chart(incomeCtx, {
        type: 'line',
        data: incomeData,
        options: {
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#e0e0e0' } },
                x: { grid: { display: false } }
            }
        }
    });
    // Occupancy Bar Chart
    const occCtx = document.getElementById('occupancyChart').getContext('2d');
    new Chart(occCtx, {
        type: 'bar',
        data: occupancyData,
        options: {
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            },
            scales: {
                y: { beginAtZero: true, max: 100, grid: { color: '#e0e0e0' } },
                x: { grid: { display: false } }
            }
        }
    });
});
</script>
