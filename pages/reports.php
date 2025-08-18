<div class="mb-3">
    <h3><i class="bi bi-bar-chart me-2 text-primary"></i>Reports</h3>
</div>
<div class="row mb-3 g-3">
    <div class="col-md-3">
        <label for="reportType" class="form-label"><i class="bi bi-file-earmark-bar-graph me-1"></i>Report Type</label>
        <select id="reportType" class="form-select">
            <option>Income</option>
            <option>Expense</option>
            <option>VAT</option>
        </select>
    </div>
    <div class="col-md-3">
        <label for="dateRange" class="form-label"><i class="bi bi-calendar-range me-1"></i>Date Range</label>
        <select id="dateRange" class="form-select">
            <option>This Month</option>
            <option>This Quarter</option>
            <option>This Year</option>
        </select>
    </div>
    <div class="col-md-6 d-flex align-items-end">
        <button class="btn btn-outline-primary me-2"><i class="bi bi-file-earmark-pdf me-1"></i> Export PDF</button>
        <button class="btn btn-outline-success me-2"><i class="bi bi-file-earmark-excel me-1"></i> Export Excel</button>
        <button class="btn btn-outline-info"><i class="bi bi-file-earmark-word me-1"></i> Export Word</button>
    </div>
</div>
<div class="card animate__animated animate__fadeIn">
    <div class="card-header"><i class="bi bi-clock-history me-1"></i>Recent Reports</div>
    <div class="card-body p-0">
        <table class="table mb-0 align-middle">
            <thead>
                <tr>
                    <th><i class="bi bi-file-earmark-text me-1"></i>Name</th>
                    <th><i class="bi bi-calendar me-1"></i>Date</th>
                    <th><i class="bi bi-file-earmark me-1"></i>Type</th>
                    <th><i class="bi bi-download me-1"></i>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Income Report - January 2024</td><td>2024-01-31</td><td>PDF</td><td><a href="#" class="btn btn-sm btn-outline-primary"><i class="bi bi-download"></i> Download</a></td></tr>
                <tr><td>Expense Report - December 2023</td><td>2023-12-31</td><td>Excel</td><td><a href="#" class="btn btn-sm btn-outline-success"><i class="bi bi-download"></i> Download</a></td></tr>
                <tr><td>VAT Report - Q4 2023</td><td>2023-12-31</td><td>Word</td><td><a href="#" class="btn btn-sm btn-outline-info"><i class="bi bi-download"></i> Download</a></td></tr>
            </tbody>
        </table>
    </div>
</div>
