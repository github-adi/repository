-My build of DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad++ (HTML Editor):
-Hacked:Run:
file:///C:/Users/Axioo/Favorites/nodenpm.js
-Via Node.js:
> const http = require('http');
undefined
>
> const hostname = '127.0.0.1';
undefined
> const port = 3000;
undefined
>
> const server = http.createServer((req, res) => {
...   res.statusCode = 200;
...   res.setHeader('Content-Type', 'text/plain');
...   res.end('Hello World\n');
... });
undefined
>
> server.listen(port, hostname, () => {
...   console.log(`Server running at http://${hostname}:${port}/`);
... });
Server {
  domain:
   Domain {
     domain: null,
     _events: { error: [Function] },
     _eventsCount: 1,
     _maxListeners: undefined,
     members: [] },
  _events:
   { request: [Function],
     connection: [Function: connectionListener],
     listening: { [Function: g] listener: [Function] } },
  _eventsCount: 3,
  _maxListeners: undefined,
  _connections: 0,
  _handle: null,
  _usingSlaves: false,
  _slaves: [],
  _unref: false,
  allowHalfOpen: true,
  pauseOnConnect: false,
  httpAllowHalfOpen: false,
  timeout: 120000,
  _pendingResponseData: 0 }
> Server running at http://127.0.0.1:3000/
-Run of the http above.
-Via GitBash:
on)
        type: bool  default: false
  --trace_idle_notification_verbose (prints the heap state used by the idle noti
fication)
        type: bool  default: false
  --print_cumulative_gc_stat (print cumulative GC statistics in name=value forma
t on exit)
        type: bool  default: false
  --print_max_heap_committed (print statistics of the maximum memory committed f
or the heap in name=value format on exit)
        type: bool  default: false
  --trace_gc_verbose (print more details following each garbage collection)
        type: bool  default: false
  --trace_allocation_stack_interval (print stack trace after <n> free-list alloc
ations)
        type: int  default: -1
  --trace_fragmentation (report fragmentation for old space)
        type: bool  default: false
  --trace_fragmentation_verbose (report fragmentation for old space (detailed))
        type: bool  default: false
  --trace_mutator_utilization (print mutator utilization, allocation speed, gc s
peed)
        type: bool  default: false
  --weak_embedded_maps_in_optimized_code (make maps embedded in optimized code w
eak)
        type: bool  default: true
  --weak_embedded_objects_in_optimized_code (make objects embedded in optimized
code weak)
        type: bool  default: true
  --flush_code (flush code that we expect not to use again)
        type: bool  default: true
  --trace_code_flushing (trace code flushing progress)
        type: bool  default: false
  --age_code (track un-executed functions to age code and flush only old code (r
equired for code flushing))
        type: bool  default: true
  --incremental_marking (use incremental marking)
        type: bool  default: true
  --min_progress_during_incremental_marking_finalization (keep finalizing increm
ental marking as long as we discover at least this many unmarked objects)
        type: int  default: 32
  --max_incremental_marking_finalization_rounds (at most try this many times to
finalize incremental marking)
        type: int  default: 3
  --concurrent_sweeping (use concurrent sweeping)
        type: bool  default: true
  --parallel_compaction (use parallel compaction)
        type: bool  default: true
  --trace_incremental_marking (trace progress of the incremental marking)
        type: bool  default: false
  --track_gc_object_stats (track object counts and memory usage)
        type: bool  default: false
  --trace_gc_object_stats (trace object counts and memory usage)
        type: bool  default: false
  --track_detached_contexts (track native contexts that are expected to be garba
ge collected)
        type: bool  default: true
  --trace_detached_contexts (trace native contexts that are expected to be garba
ge collected)
        type: bool  default: false
  --move_object_start (enable moving of object starts)
        type: bool  default: true
  --memory_reducer (use memory reducer)
        type: bool  default: true
  --scavenge_reclaim_unmodified_objects (remove unmodified and unreferenced obje
cts)
        type: bool  default: false
  --heap_growing_percent (specifies heap growing factor as (1 + heap_growing_per
cent/100))
        type: int  default: 0
  --histogram_interval (time interval in ms for aggregating memory histograms)
        type: int  default: 600000
  --heap_profiler_trace_objects (Dump heap object allocations/movements/size_upd
ates)
        type: bool  default: false
  --sampling_heap_profiler_suppress_randomness (Use constant sample intervals to
 eliminate test flakiness)
        type: bool  default: false
  --use_idle_notification (Use idle notification to reduce memory footprint.)
        type: bool  default: true
  --use_ic (use inline caching)
        type: bool  default: true
  --trace_ic (trace inline cache state transitions)
        type: bool  default: false
  --native_code_counters (generate extra code for manipulating stats counters)
        type: bool  default: false
  --always_compact (Perform compaction on every full GC)
        type: bool  default: false
  --never_compact (Never perform compaction on full GC - testing only)
        type: bool  default: false
  --compact_code_space (Compact code space on full collections)
        type: bool  default: true
  --cleanup_code_caches_at_gc (Flush inline caches prior to mark compact collect
ion and flush code caches in maps during mark compact cycle.)
        type: bool  default: true
  --use_marking_progress_bar (Use a progress bar to scan large objects in increm
ents when incremental marking is active.)
        type: bool  default: true
  --zap_code_space (Zap free memory in code space with 0xCC while sweeping.)
        type: bool  default: false
  --random_seed (Default seed for initializing random generator (0, the default,
 means to use system random).)
        type: int  default: 0
  --trace_weak_arrays (Trace WeakFixedArray usage)
        type: bool  default: false
  --track_prototype_users (Keep track of which maps refer to a given prototype o
bject)
        type: bool  default: false
  --trace_prototype_users (Trace updates to prototype user tracking)
        type: bool  default: false
  --eliminate_prototype_chain_checks (Collapse prototype chain checks into singl
e-cell checks)
        type: bool  default: true
  --use_verbose_printer (allows verbose printing)
        type: bool  default: true
  --allow_natives_syntax (allow natives syntax)
        type: bool  default: false
  --trace_parse (trace parsing and preparsing)
        type: bool  default: false
  --trace_sim (Trace simulator execution)
        type: bool  default: false
  --debug_sim (Enable debugging the simulator)
        type: bool  default: false
  --check_icache (Check icache flushes in ARM and MIPS simulator)
        type: bool  default: false
  --stop_sim_at (Simulator stop after x number of instructions)
        type: int  default: 0
  --sim_stack_alignment (Stack alingment in bytes in simulator (4 or 8, 8 is def
ault))
        type: int  default: 8
  --sim_stack_size (Stack size of the ARM64, MIPS64 and PPC64 simulator in kByte
s (default is 2 MB))
        type: int  default: 2048
  --log_regs_modified (When logging register values, only print modified registe
rs.)
        type: bool  default: true
  --log_colour (When logging, try to use coloured output.)
        type: bool  default: false
  --ignore_asm_unimplemented_break (Don't break for ASM_UNIMPLEMENTED_BREAK macr
os.)
        type: bool  default: false
  --trace_sim_messages (Trace simulator debug messages. Implied by --trace-sim.)

        type: bool  default: false
  --stack_trace_on_illegal (print stack trace when an illegal exception is throw
n)
        type: bool  default: false
  --abort_on_uncaught_exception (abort program (dump core) when an uncaught exce
ption is thrown)
        type: bool  default: false
  --randomize_hashes (randomize hashes to avoid predictable hash collisions (wit
h snapshots this option cannot override the baked-in seed))
        type: bool  default: true
  --hash_seed (Fixed seed to use to hash property keys (0 means random)(with sna
pshots this option cannot override the baked-in seed))
        type: int  default: 0
  --runtime_call_stats (report runtime call counts and times)
        type: bool  default: false
  --profile_deserialization (Print the time it takes to deserialize the snapshot
.)
        type: bool  default: false
  --serialization_statistics (Collect statistics on serialized objects.)
        type: bool  default: false
  --regexp_optimization (generate optimized regexp code)
        type: bool  default: true
  --testing_bool_flag (testing_bool_flag)
        type: bool  default: true
  --testing_maybe_bool_flag (testing_maybe_bool_flag)
        type: maybe_bool  default: unset
  --testing_int_flag (testing_int_flag)
        type: int  default: 13
  --testing_float_flag (float-flag)
        type: float  default: 2.5
  --testing_string_flag (string-flag)
        type: string  default: Hello, world!
  --testing_prng_seed (Seed used for threading test randomness)
        type: int  default: 42
  --testing_serialization_file (file in which to testing_serialize heap)
        type: string  default: C:\Windows\Temp\serdes
  --startup_src (Write V8 startup as C++ src. (mksnapshot only))
        type: string  default: NULL
  --startup_blob (Write V8 startup blob file. (mksnapshot only))
        type: string  default: NULL
  --profile_hydrogen_code_stub_compilation (Print the time it takes to lazily co
mpile hydrogen code stubs.)
        type: bool  default: false
  --predictable (enable predictable mode)
        type: bool  default: false
  --force_marking_deque_overflows (force overflows of marking deque by reducing
it's size to 64 words)
        type: bool  default: false
  --stress_compaction (stress the GC compactor to flush out bugs (implies --forc
e_marking_deque_overflows))
        type: bool  default: false
  --manual_evacuation_candidates_selection (Test mode only flag. It allows an un
it test to select evacuation candidates pages (requires --stress_compaction).)
        type: bool  default: false
  --external_allocation_limit_incremental_time (Time spent in incremental markin
g steps (in ms) once the external allocation limit is reached)
        type: int  default: 1
  --disable_old_api_accessors (Disable old-style API accessors whose setters tri
gger through the prototype chain)
        type: bool  default: false
  --help (Print usage message, including flags, on console)
        type: bool  default: true
  --dump_counters (Dump counters on exit)
        type: bool  default: false
  --map_counters (Map counters to a file)
        type: string  default:
  --js_arguments (Pass all remaining arguments to the script. Alias for "--".)
        type: arguments  default:
  --log (Minimal logging (no API, code, GC, suspect, or handles samples).)
        type: bool  default: false
  --log_all (Log all events to the log file.)
        type: bool  default: false
  --log_api (Log API events to the log file.)
        type: bool  default: false
  --log_code (Log code events to the log file without profiling.)
        type: bool  default: false
  --log_gc (Log heap samples on garbage collection for the hp2ps tool.)
        type: bool  default: false
  --log_handles (Log global handle events.)
        type: bool  default: false
  --log_snapshot_positions (log positions of (de)serialized objects in the snaps
hot.)
        type: bool  default: false
  --log_suspect (Log suspect operations.)
        type: bool  default: false
  --prof (Log statistical profiling information (implies --log-code).)
        type: bool  default: false
  --prof_cpp (Like --prof, but ignore generated code.)
        type: bool  default: false
  --prof_browser_mode (Used with --prof, turns on browser-compatible mode for pr
ofiling.)
        type: bool  default: true
  --log_regexp (Log regular expression execution.)
        type: bool  default: false
  --logfile (Specify the name of the log file.)
        type: string  default: v8.log
  --logfile_per_isolate (Separate log files for each isolate.)
        type: bool  default: true
  --ll_prof (Enable low-level linux profiler.)
        type: bool  default: false
  --perf_basic_prof (Enable perf linux profiler (basic support).)
        type: bool  default: false
  --perf_basic_prof_only_functions (Only report function code ranges to perf (i.
e. no stubs).)
        type: bool  default: false
  --gc_fake_mmap (Specify the name of the file for fake gc mmap used in ll_prof)

        type: string  default: /tmp/__v8_gc__
  --log_internal_timer_events (Time internal events.)
        type: bool  default: false
  --log_timer_events (Time events including external callbacks.)
        type: bool  default: false
  --log_instruction_stats (Log AArch64 instruction statistics.)
        type: bool  default: false
  --log_instruction_file (AArch64 instruction statistics log file.)
        type: string  default: arm64_inst.csv
  --log_instruction_period (AArch64 instruction statistics logging period.)
        type: int  default: 4194304
  --redirect_code_traces (output deopt information and disassembly into file cod
e-<pid>-<isolate id>.asm)
        type: bool  default: false
  --redirect_code_traces_to (output deopt information and disassembly into the g
iven file)
        type: string  default: NULL
  --hydrogen_track_positions (track source code positions when building IR)
        type: bool  default: false
  --trace_elements_transitions (trace elements transitions)
        type: bool  default: false
  --trace_creation_allocation_sites (trace the creation of allocation sites)
        type: bool  default: false
  --print_code_stubs (print code stubs)
        type: bool  default: false
  --test_secondary_stub_cache (test secondary stub cache by disabling the primar
y one)
        type: bool  default: false
  --test_primary_stub_cache (test primary stub cache by disabling the secondary
one)
        type: bool  default: false
  --print_code (print generated code)
        type: bool  default: false
  --print_opt_code (print optimized code)
        type: bool  default: false
  --print_unopt_code (print unoptimized code before printing optimized code base
d on it)
        type: bool  default: false
  --print_code_verbose (print more information for code)
        type: bool  default: false
  --print_builtin_code (print generated code for builtins)
        type: bool  default: false
  --sodium (print generated code output suitable for use with the Sodium code vi
ewer)
        type: bool  default: false
  --print_all_code (enable all flags related to printing code)
        type: bool  default: false

Axioo@AXIOO-PC ~ (master|AM/REBASE)
$

