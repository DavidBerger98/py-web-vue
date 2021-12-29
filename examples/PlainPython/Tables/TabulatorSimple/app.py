from pywebvue import App
from pywebvue.modules import Tabulator

# -----------------------------------------------------------------------------
# App Setup
# -----------------------------------------------------------------------------

app = App("Tabulator Demo")
app.state = {
    "options": {
        "columns": [
            {
                "title": "Name",
                "field": "name",
                "sorter": "string",
                "width": 200,
                "editor": True,
            },
        ],
    },
    "tableData": [{"name": "Test", "age": 13}],
}
app.enable_module(Tabulator)

# -----------------------------------------------------------------------------
# Start server
# -----------------------------------------------------------------------------

if __name__ == "__main__":
    app.run_server()
