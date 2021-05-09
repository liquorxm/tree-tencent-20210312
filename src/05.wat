;; 05.wat
(module
  (func $Math.min (;0;) (import "Math" "min") (param i32 i32) (result i32))
  (func $Math.max (;1;) (import "Math" "max") (param i32 i32) (result i32))
  (func $Run (;2;) (export "Run") (param $var0 i32) (param $var1 i32) (result i32)
    (local $var2 i32) (local $var3 i32) (local $var4 i32) (local $var5 i32) (local $var6 i32) (local $var7 i32)
    local.get $var0
    local.set $var2
    local.get $var1
    i32.const 1
    i32.sub
    local.tee $var4
    if
      loop $label1
        local.get $var2
        local.set $var3
        i32.const 0
        local.set $var6
        i32.const 10
        local.set $var7
        loop $label0
          local.get $var3
          i32.const 10
          i32.rem_u
          local.set $var5
          local.get $var3
          i32.const 10
          i32.div_u
          local.set $var3
          local.get $var5
          local.get $var6
          call $Math.max
          local.set $var6
          local.get $var5
          local.get $var7
          call $Math.min
          local.set $var7
          local.get $var3
          i32.const 0
          i32.gt_u
          br_if $label0
        end $label0
        local.get $var2
        local.get $var6
        local.get $var7
        i32.mul
        i32.add
        local.set $var2
        local.get $var4
        i32.const 1
        i32.sub
        local.tee $var4
        br_if $label1
      end $label1
    end
    local.get $var2
  )
)