<?php
// Main entry point for the PHP Dashboard
$page = isset($_GET['page']) ? $_GET['page'] : 'dashboard';
$pageFile = __DIR__ . '/pages/' . $page . '.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dubai Property Management Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row min-vh-100">
            <!-- Sidebar -->
            <nav class="col-md-2 d-none d-md-block bg-light sidebar py-4">
                <div class="sidebar-sticky">
                    <h4 class="text-center mb-4">Dashboard</h4>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a class="nav-link" href="?page=dashboard">Dashboard</a></li>
                        <li class="nav-item"><a class="nav-link" href="?page=properties">Properties</a></li>
                        <li class="nav-item"><a class="nav-link" href="?page=tenants">Tenants</a></li>
                        <li class="nav-item"><a class="nav-link" href="?page=contracts">Contracts</a></li>
                        <li class="nav-item"><a class="nav-link" href="?page=payments">Payments</a></li>
                        <li class="nav-item"><a class="nav-link" href="?page=reports">Reports</a></li>
                        <li class="nav-item"><a class="nav-link" href="?page=settings">Settings</a></li>
                    </ul>
                </div>
            </nav>
            <!-- Main Content -->
            <main class="col-md-10 ms-sm-auto px-md-4 py-4">
                <header class="d-flex justify-content-between align-items-center mb-4">
                    <h2>Dubai Property Management</h2>
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
</body>
</html>
