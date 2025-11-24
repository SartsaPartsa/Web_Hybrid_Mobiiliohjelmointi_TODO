import React, { useEffect, useState } from "react";
import {Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { Task } from "./types";

// Tallennusavain
const STORAGE_KEY = "EXPO_TODO_LIST";

export default function App() {
  // Tehtävälista
  const [tasks, setTasks] = useState<Task[]>([]);

  // Lataa tehtävät käynnistyessä
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) setTasks(JSON.parse(saved));
    })();
  }, []);

  // Tallenna tehtävät automaattisesti
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Lisää uusi tehtävä
  const addTask = (text: string) => {
    setTasks((prev) => [
      ...prev,
      { 
        id: String(Date.now()),
        text,
        done: false
      },
    ]);
  };

  // Merkitse tehtävä tehdyksi/tekemättömäksi
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => 
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo list</Text>

      <TaskInput onAdd={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} />
        )}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}

// Tyylit
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

