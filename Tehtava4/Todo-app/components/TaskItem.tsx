import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Task } from "../types";

// Komponentin propsit
interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

export default function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(task.id)}
    >
      {/* Näytä teksti, yliviivattuna jos tehty */}
      <Text style={[styles.text, task.done && styles.textDone]}>
        {task.text}
      </Text>
    </TouchableOpacity>
  );
}

// Tyylit
const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  text: {
    fontSize: 16,
  },
  textDone: {
    textDecorationLine: "line-through",
    color: "#999",
  },
});
