<div class="mb-3">
    <h3>Settings</h3>
</div>
<div class="row">
    <div class="col-md-6">
        <div class="card mb-3">
            <div class="card-header">Profile</div>
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-control" value="Admin User" readonly>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" value="admin@dubaiproperty.com" readonly>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone</label>
                        <input type="text" class="form-control" value="+971 50 123 4567" readonly>
                    </div>
                </form>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-header">Language</div>
            <div class="card-body">
                <select class="form-select" disabled>
                    <option selected>English</option>
                </select>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-header">Notifications</div>
            <div class="card-body">
                <div class="form-check form-switch mb-2">
                    <input class="form-check-input" type="checkbox" id="emailNotif" checked disabled>
                    <label class="form-check-label" for="emailNotif">Email Notifications</label>
                </div>
                <div class="form-check form-switch mb-2">
                    <input class="form-check-input" type="checkbox" id="smsNotif" disabled>
                    <label class="form-check-label" for="smsNotif">SMS Notifications</label>
                </div>
                <div class="form-check mb-2">
                    <label class="form-label">Contract Expiry Alerts</label>
                    <select class="form-select" disabled>
                        <option>30 days</option>
                        <option>60 days</option>
                        <option>90 days</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card mb-3">
            <div class="card-header">System Information</div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Version: 1.0.0</li>
                    <li class="list-group-item">Last Updated: 2024-01-15</li>
                    <li class="list-group-item">Database: PostgreSQL 14</li>
                    <li class="list-group-item">Environment: Production</li>
                </ul>
            </div>
        </div>
    </div>
</div>
