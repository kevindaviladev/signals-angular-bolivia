import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, tap } from 'rxjs';

interface State {
  data: any[];
  loaded: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loaded: false,
  loading: false,
  error: null
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly http = inject(HttpClient);
  state = signal(initialState);

  data = computed(() => this.state().data);
  loading = computed(() => this.state().loading);
  loaded = computed(() => this.state().loaded);
  error = computed(() => this.state().error);

  getUsers() {
    this.state.set({ data: [], loaded: false, loading: true, error: null })
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (res) => {
          this.state.set({ data: res, loaded: true, loading: false, error: null })
        },
        error: (err) => {
          this.state.set({ data: [], loaded: true, loading: false, error: err })
        }
      })
  }
}
