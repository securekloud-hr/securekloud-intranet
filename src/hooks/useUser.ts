import { useState, useEffect } from 'react';

interface User {
  name: string;
  fullName: string;
  success?: boolean;
  username?: string;
  fullUsername?: string;
  domain?: string;
}

// ✅ Updated to use localhost:3000 

const API_BASE_URL = 'http://192.168.26.103';





const fetchUser = async (): Promise<User> => {
  console.log('🔄 Fetching user data...');
  
  try {
    const url = `${API_BASE_URL}/backend/api/user`;
    console.log('📡 Making request to:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include', // This requires specific origin, not wildcard
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('📊 Response status:', response.status);
    console.log('📊 Response headers:', Object.fromEntries(response.headers.entries()));
    
    // Get the response text first to see what we're actually getting
    const responseText = await response.text();
    console.log('📄 Raw response (first 500 chars):', responseText.substring(0, 500));
    
    if (!response.ok) {
      console.error('❌ Response not OK:', response.status, response.statusText);
      console.error('❌ Response body:', responseText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    console.log('📄 Content-Type:', contentType);
    
    // Check if the response looks like HTML
    if (responseText.trim().startsWith('<!DOCTYPE') || responseText.trim().startsWith('<html')) {
      console.error('❌ Server returned HTML instead of JSON');
      console.error('❌ This usually means:');
      console.error('   1. The Node.js server is not running');
      console.error('   2. IIS is serving a default HTML page');
      console.error('   3. The route is not configured correctly');
      throw new Error('Server returned HTML instead of JSON');
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('❌ JSON parsing failed:', parseError);
      console.error('❌ Response was:', responseText);
      throw new Error('Failed to parse JSON response');
    }

    console.log('✅ User data received:', data);

    // Transform the API response to match our User interface
    const user: User = {
      name: data.username || data.name || 'Unknown User',
      fullName: data.fullUsername || data.fullName || `${data.username} (${data.domain})` || 'Unknown User',
      success: data.success,
      username: data.username,
      fullUsername: data.fullUsername,
      domain: data.domain
    };

    console.log('🎯 Transformed user:', user);
    return user;

  } catch (error) {
    console.error('❌ Failed to load user:', error);
    
    // Log specific error types
    if (error instanceof TypeError) {
      console.error('🌐 Network error - check if server is running');
    } else if (error instanceof SyntaxError) {
      console.error('📝 JSON parsing error - server might be returning HTML');
    }
    
    throw error;
  }
};

// Fallback user for development/testing
const fallbackUser: User = {
  name: 'Development User',
  fullName: 'Development User (Fallback)',
  success: false
};

export const useUser = () => {
  const [user, setUser] = useState<User>(fallbackUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('🚀 Starting user load...');
        
        const userData = await fetchUser();
        
        if (userData.success !== false) {
          setUser(userData);
          console.log('✅ User loaded successfully:', userData.name);
        } else {
          console.log('⚠️ API returned success: false, using fallback');
          setUser(fallbackUser);
        }
        
      } catch (err) {
        console.error('❌ Failed to load user:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setUser(fallbackUser);
        console.log('🔧 Using fallback user:', fallbackUser);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return { user, loading, error };
};