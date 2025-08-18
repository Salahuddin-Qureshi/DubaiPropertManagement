<?php
$page = isset($_GET['page']) ? $_GET['page'] : 'dashboard';
$pageFile = __DIR__ . '/pages/' . $page . '.php';
function isActive($p, $page) { return $p === $page ? 'active' : ''; }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dubai Property Management Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row min-vh-100">
            <!-- Sidebar -->
            <nav class="col-md-2 d-none d-md-block sidebar py-4">
                <div class="sidebar-sticky text-center">
                    <div class="mb-4">
                        <i class="bi bi-buildings" style="font-size:2.5rem;"></i>
                        <h4 class="mt-2 mb-0">DPM</h4>
                        <small style="color:#b2dfdb;">Dashboard</small>
                    </div>
                    <ul class="nav flex-column text-start">
                        <li class="nav-item"><a class="nav-link <?php echo isActive('dashboard', $page); ?>" href="?page=dashboard"><i class="bi bi-speedometer2"></i> Dashboard</a></li>
                        <li class="nav-item"><a class="nav-link <?php echo isActive('properties', $page); ?>" href="?page=properties"><i class="bi bi-house-door"></i> Properties</a></li>
                        <li class="nav-item"><a class="nav-link <?php echo isActive('tenants', $page); ?>" href="?page=tenants"><i class="bi bi-people"></i> Tenants</a></li>
                        <li class="nav-item"><a class="nav-link <?php echo isActive('contracts', $page); ?>" href="?page=contracts"><i class="bi bi-file-earmark-text"></i> Contracts</a></li>
                        <li class="nav-item"><a class="nav-link <?php echo isActive('payments', $page); ?>" href="?page=payments"><i class="bi bi-credit-card"></i> Payments</a></li>
                        <li class="nav-item"><a class="nav-link <?php echo isActive('reports', $page); ?>" href="?page=reports"><i class="bi bi-bar-chart"></i> Reports</a></li>
                        <li class="nav-item"><a class="nav-link <?php echo isActive('settings', $page); ?>" href="?page=settings"><i class="bi bi-gear"></i> Settings</a></li>
                    </ul>
                </div>
            </nav>
            <!-- Main Content -->
            <main class="col-md-10 ms-sm-auto px-md-4 py-4">
                <header class="d-flex justify-content-between align-items-center mb-4">
                    <div class="d-flex align-items-center gap-3">
                        <i class="bi bi-buildings text-primary" style="font-size:2rem;"></i>
                        <h2 class="mb-0" style="font-weight:700; letter-spacing:1px;">Dubai Property Management</h2>
                    </div>
                    <span class="text-muted">Welcome, Admin</span>
                </header>
                <div>
                    <?php
                    if (file_exists($pageFile)) {
                        include $pageFile;
                    } else {
                        echo '<div class="alert alert-danger">Page not found.</div>';
                    }
                    ?>
                </div>
            </main>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</body>
</html>
