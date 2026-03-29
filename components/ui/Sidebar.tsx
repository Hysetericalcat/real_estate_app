import {
    View, Text, TouchableOpacity, Modal,
    Animated, StyleSheet, Pressable, Dimensions
  } from 'react-native';
  //pressable -> modern version of button ,wheras TouchableOpacity is older
  import { useEffect, useRef } from 'react';
  import { Ionicons } from '@expo/vector-icons';
  import { router } from 'expo-router';
  
  const SCREEN_WIDTH = Dimensions.get('window').width;
  
  export default function Sidebar({ visible, onClose }: { visible: boolean; onClose: () => void }) {
    const slideAnim = useRef(new Animated.Value(-260)).current;

    const styles = StyleSheet.create({
        overlay: {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'rgba(15,23,42,0.35)',
        },
        sidebar: {
          position: 'absolute',
          top: 0, left: 0, bottom: 0,
          width: 240,
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
          borderRightWidth: 1,
          borderRightColor: '#E2E8F0',
        },
        header: {
          height: 56,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#F1F5F9',
        },
        title: {
          fontSize: 14,
          fontWeight: '600',
          color: '#0F172A',
        },
        closeBtn: {
          width: 32, height: 32,
          borderRadius: 8,
          backgroundColor: '#F1F5F9',
          alignItems: 'center',
          justifyContent: 'center',
        },
        body: {
          padding: 12,
        },
        sidebarBtn: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          padding: 12,
          borderRadius: 12,
          backgroundColor: '#F0FDF9',
        },
        sidebarBtnText: {
          fontSize: 14,
          fontWeight: '500',
          color: '#0F766E',
        },
      });
  
    useEffect(() => {
      Animated.timing(slideAnim, {
        toValue: visible ? 0 : -260,
        duration: 280,
        useNativeDriver: true,
      }).start();
    }, [visible]);
  
    return (
      <Modal transparent visible={visible} animationType="none" onRequestClose={onClose}>
        <Pressable style={styles.overlay} onPress={onClose} />
        <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
  
          <View style={styles.header}>
            <Text style={styles.title}>Menu</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Ionicons name="close" size={18} color="#334155" />
            </TouchableOpacity>
          </View>
  
          <View style={styles.body}>
            <TouchableOpacity
              style={styles.sidebarBtn}
              onPress={() => { onClose(); router.push('/saved'); }}
            >
              <Ionicons name="bookmark-outline" size={18} color="#0F766E" />
              <Text style={styles.sidebarBtnText}>Saved</Text>
            </TouchableOpacity>
          </View>
  
        </Animated.View>
      </Modal>
    );
  }
  
