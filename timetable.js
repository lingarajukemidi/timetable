<script>
    // Highlight the current day column
    document.addEventListener("DOMContentLoaded", function () {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        const today = new Date().getDay(); // Sunday = 0, Monday = 1, etc.

        // Highlight the current day's column (if within the timetable range)
        if (today >= 1 && today <= 5) {
            const columns = document.querySelectorAll(`table tbody tr td:nth-child(${today + 1})`);
            columns.forEach(column => {
                column.style.backgroundColor = "#d1e7dd"; // Light green for highlight
            });
        }

        // Add toggle functionality for rows
        const rows = document.querySelectorAll("table tbody tr");
        rows.forEach(row => {
            row.addEventListener("click", function () {
                if (this.style.opacity === "0.5") {
                    this.style.opacity = "1";
                } else {
                    this.style.opacity = "0.5"; // Dim the row when clicked
                }
            });
        });
    });
</script>
