import React, { useState } from "react";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import {
  arrayMove,
  useSortable,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";


const DraggableHeaderCell = ({ column, onDragStart }) => {
  const { listeners, setNodeRef, isDragging } = useSortable({
    id: column.id,
  });

  const style = {
    cursor: "grab",
    backgroundColor: "#C0E3E5",
    height: "53px", 
    borderRight: "2px solid #EFEFEF",
    fontWeight: "bold",
     boxShadow: isDragging ? "5px 5px 10px rgba(0, 0, 0, 0.2)" : "none",
    transform: isDragging ? "rotate(-5deg)" : "none",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",

  };

  return (
    <TableCell
      ref={setNodeRef}
      {...listeners}
      style={style}
      onDragStart={onDragStart}
      draggable="true"
    >
      {column.name}
    </TableCell>
  );
};


const DataTable = ({rows,columnsData}) => {
  const [columns, setColumns] = useState(columnsData);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setColumns((data) => {
        const oldIndex = data.findIndex((item) => item.id === active.id);
        const newIndex = data.findIndex((item) => item.id === over.id);

        return arrayMove(data, oldIndex, newIndex);
      });
    }
  };

  const onDragStart = (event) => {
    event.preventDefault();
  };

  return (
    

   <DndContext
  sensors={sensors}
  onDragEnd={handleDragEnd}
  collisionDetection={closestCenter}
  modifiers={[restrictToHorizontalAxis]}
>
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <DraggableHeaderCell
              key={column.id}
              column={column}
              onDragStart={onDragStart}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            {columns.map((column) => (
              <TableCell style={{height: "53px",border: "2px solid #EFEFEF",}} key={column.id}>
                {row[column.id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</DndContext>
)
};

export default DataTable;
