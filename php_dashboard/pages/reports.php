<div class="mb-3">
    <h3>Reports</h3>
</div>
<div class="row mb-3">
    <div class="col-md-3">
        <label for="reportType" class="form-label">Report Type</label>
        <select id="reportType" class="form-select">
            <option>Income</option>
            <option>Expense</option>
            <option>VAT</option>
        </select>
    </div>
    <div class="col-md-3">
        <label for="dateRange" class="form-label">Date Range</label>
        <select id="dateRange" class="form-select">
            <option>This Month</option>
            <option>This Quarter</option>
            <option>This Year</option>
        </select>
    </div>
    <div class="col-md-6 d-flex align-items-end">
        <button class="btn btn-outline-primary me-2">Export PDF</button>
        <button class="btn btn-outline-success me-2">Export Excel</button>
        <button class="btn btn-outline-info">Export Word</button>
    </div>
</div>
<div class="card">
    <div class="card-header">Recent Reports</div>
    <div class="card-body p-0">
        <table class="table mb-0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Income Report - January 2024</td><td>2024-01-31</td><td>PDF</td><td><a href="#" class="btn btn-sm btn-outline-primary">Download</a></td></tr>
                <tr><td>Expense Report - December 2023</td><td>2023-12-31</td><td>Excel</td><td><a href="#" class="btn btn-sm btn-outline-success">Download</a></td></tr>
                <tr><td>VAT Report - Q4 2023</td><td>2023-12-31</td><td>Word</td><td><a href="#" class="btn btn-sm btn-outline-info">Download</a></td></tr>
            </tbody>
        </table>
    </div>
</div>
